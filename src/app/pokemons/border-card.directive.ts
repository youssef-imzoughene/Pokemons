import { Directive, ElementRef,HostListener,Input } from '@angular/core';
import { on } from 'cluster';

@Directive({
  selector: '[pkmnBorderCard]' 
})
export class BorderCardDirective {

    private initialColor:string = "#f5f5f5";
    private defaultColor:string = "#009688";
    private defaultHeight:number = 180;


	constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
		this.setHeight(this.defaultHeight);
	}
    @Input('pkmnBorderCard') borderColor : string; //alias
    @Input() pkmnBorderCard : string; //sans alias



    @HostListener('mouseenter') onmouseenter(){
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener('mouseleave') onmouseleave(){
        this.setBorder(this.initialColor);
    }

   

	private setBorder(color: string) {
		let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}
}