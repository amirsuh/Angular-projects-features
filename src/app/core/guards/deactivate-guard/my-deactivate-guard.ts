import { CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}

export const myDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {

  //const confirmMessage = confirm('Are you reallt want to exit??')
  return component.canDeactivate ? component.canDeactivate() : true;;
};
