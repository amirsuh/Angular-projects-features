import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComp } from '../dynamic-comp/dynamic-comp';

@Component({
  selector: 'app-host',
  imports: [],
  templateUrl: './host.html',
  styleUrl: './host.scss',
})
export class Host {
@ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
dynamicComponentContainer!: ViewContainerRef;
constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
loadDynamicComponent(title: string, content: string)
{
const componentFactory =
this.componentFactoryResolver.resolveComponentFactory(DynamicComp);
const componentRef =
this.dynamicComponentContainer.createComponent(componentFactory);
// Set input properties of the dynamic component
componentRef.instance.title = title;
componentRef.instance.content = content;
}
}
