import { trigger, transition, style, animate, state } from "@angular/animations"; 


export const iconSwitch = trigger('iconSwitch', [
    transition('* => *', [
      style({ opacity: 0}),
      animate('500ms ease-out', style({
        opacity: 1
      }))
    ])
  ])

export const iconFlip = trigger('iconFlip', [
  state('true', style({
    transform: 'rotate(0deg)'
  })),
  state('false', style({
    transform: 'rotate(180deg)'
  })),
  transition('* => *', animate('.25s ease-in-out'))
])