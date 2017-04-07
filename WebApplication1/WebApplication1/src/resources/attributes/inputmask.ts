import {autoinject} from "aurelia-framework"; 
import * as $ from "jquery"; 
import * as t from 'inputmask'; 
console.log(t);

@autoinject 
export class InputMaskCustomAttribute
{
	public value:string; 
	private $e:$; 

	constructor(private element:Element)
	{
		this.$e = $(this.element); 
	}

	attached()
	{
    console.log((<any>window).Inputmask.format('123', 'currency' ));
		this.$e.on("focusout", (e:any ) => 
		{
			if (this.$e.inputmask("isComplete"))
			{
				let event = document.createEvent('Event'); 
				event.initEvent('input', true, true); 
				e.target.dispatchEvent(event); 
			}
		}); 
		this.$e.inputmask(this.value); 
	}

	detached()
	{
		this.$e.off("focusout"); 
		this.$e.inputmask("remove"); 
	}
}