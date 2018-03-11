import { trigger, transition, style, animate, state } from "@angular/animations"; 

export const expandTransition = trigger('expand', [
    state('true', style({
        overflow: 'hidden',
        height: '*'
    })),
    state('false', style({
        overflow: 'hidden',
        height: '0px',
        opacity: 0
    })),
    transition('* => *', animate('.25s ease-in-out'))
])