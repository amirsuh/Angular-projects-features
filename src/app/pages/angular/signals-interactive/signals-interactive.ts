import { Component, signal, Injector, inject, effect, computed } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, from } from 'rxjs';
import { Mockdataservice } from '../../../core/services/mock/mockdataservice';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

// Types for Course and CourseCategory
export type CourseCategory = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type Course = {
  id: string;
  title: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl: string;
  courseListIcon: string;
  category: CourseCategory;
  lessonsCount: number;
};
export type GetCoursesResponse = {
  courses: Course[];
};

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-signals-interactive',
  templateUrl: './signals-interactive.html',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  styleUrl: './signals-interactive.scss',
})
export class SignalsInteractive {
  dropDownData: Course[] = [
    {
      id: 'course-001',
      title: 'New Course 1',
      longDescription:
        'A detailed description of the new course. This course is designed for beginners and covers essential concepts in a structured manner.',
      seqNo: 100,
      iconUrl: 'path-to-icon-1',
      price: 120,
      uploadedImageUrl: 'path-to-uploaded-image-1',
      courseListIcon: 'path-to-list-icon-1',
      category: 'BEGINNER',
      lessonsCount: 5,
    },
    {
      id: 'course-002',
      title: 'New Course 2',
      longDescription:
        'This course is ideal for intermediate learners looking to improve their skills. It covers advanced topics in detail.',
      seqNo: 101,
      iconUrl: 'path-to-icon-2',
      price: 150,
      uploadedImageUrl: 'path-to-uploaded-image-2',
      courseListIcon: 'path-to-list-icon-2',
      category: 'INTERMEDIATE',
      lessonsCount: 8,
    },
    {
      id: 'course-003',
      title: 'New Course 3',
      longDescription:
        'A comprehensive course for advanced learners who want to deepen their expertise in a particular subject area.',
      seqNo: 102,
      iconUrl: 'path-to-icon-3',
      price: 200,
      uploadedImageUrl: 'path-to-uploaded-image-3',
      courseListIcon: 'path-to-list-icon-3',
      category: 'ADVANCED',
      lessonsCount: 10,
    },
    {
      id: 'course-004',
      title: 'New Course 4',
      longDescription:
        'A beginner-friendly course focusing on foundational knowledge and practical skills for those just starting out.',
      seqNo: 103,
      iconUrl: 'path-to-icon-4',
      price: 80,
      uploadedImageUrl: 'path-to-uploaded-image-4',
      courseListIcon: 'path-to-list-icon-4',
      category: 'BEGINNER',
      lessonsCount: 6,
    },
    {
      id: 'course-005',
      title: 'New Course 5',
      longDescription:
        'An intermediate course designed to bridge the gap between beginner and advanced concepts. Suitable for learners with some prior knowledge.',
      seqNo: 104,
      iconUrl: 'path-to-icon-5',
      price: 135,
      uploadedImageUrl: 'path-to-uploaded-image-5',
      courseListIcon: 'path-to-list-icon-5',
      category: 'INTERMEDIATE',
      lessonsCount: 7,
    },
  ];
  cartItems = signal<CartItem[]>([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
  ]);
  form: FormGroup;
 currentId: number = 1;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([]), // FormArray to hold dynamic form groups
    });
  }

  totalAmount = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.price * item.quantity, 0);
  });

  updateQuantity(id: any, event: any) {
    const newQuantity = parseInt(event.target.value);
    this.cartItems.update((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
    console.log(id, event);
  }

  updatePrice(itemId: any, event: any) {
    const newPrice = parseInt(event.target.value);
    this.cartItems.update((items) =>
      items.map((item) => (item.id === itemId ? { ...item, price: newPrice } : item))
    );
  }
  injector = inject(Injector);
  counter = signal(0);
  // Define the courses signal with the proper type
  #courses = signal<Course[]>([]); // Signal to store an array of courses

  coursesService = inject(Mockdataservice); // Service to fetch courses
  selectedValue: Course | '' = '';
  selectedChoice: any;

  // Getter to expose courses to the template
  get courses() {
    return this.#courses();
  }

  getCourse(data: any) {
    console.log(data, this.selectedChoice);
    this.selectedValue = data;
    //this.onAddCourse()
  }
  // Adds a new course (for demonstration purposes)
  async onAddCourse() {
    if (this.selectedValue === '') {
      // nothing selected to add
      return;
    }
    const newCourse: Course = this.selectedValue;

    // Update the courses signal with the new course
    const newCourses = [...this.#courses(), newCourse];
    this.#courses.set(newCourses);
    this.selectedValue = '';
    this.selectedChoice = 'Select your option';
  }

  increment() {
    this.counter.update((currentValue) => currentValue + 1);
  }
  decrement() {
    this.counter.update((currentValue) => currentValue - 1);
  }
  addNewProduct() {
    const itemFormGroup = this.fb.group({
      id: [this.currentId],
      name:['',Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],  // Price input
      quantity: [0, [Validators.required, Validators.min(1)]]  // Quantity input
    });
    this.items.push(itemFormGroup);
    this.currentId++;
  }
    // Getter to access the FormArray
  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }
  onSubmit(){

  }
  addCartItem(){
    const newMessage = this.form.value.items
    let cartItemsToAdd: CartItem[] = [];
   newMessage.forEach((res:any)=>{
      let obj = {
        id: res.id,
        name:res.name,
        price:res.price,
        quantity:res.quantity
      }
      cartItemsToAdd.push(obj)
    })
     this.cartItems.update((res:any)=>{
      return [...res,...cartItemsToAdd]
     })
     this.clearForm();
  }
  clearForm(){
    const itemsArray = this.form.get('items') as FormArray;
    while(itemsArray.length>0){
     itemsArray.removeAt(0)
    }
    this.form.reset()
  }
}
