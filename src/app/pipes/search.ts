import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})

export class SearchPipe implements PipeTransform {
	public transform(value, args: string){//args->lo q se busca, value->resultado
		if(!value){
			return;
		}
		if(!args){
			return value; //regrese todos en caso q no se envíe ningun valor
		}
		args = args.toLowerCase();
		return value .filter((item) =>{
			return JSON.stringify(item).toLowerCase().includes(args);
		});
	}
}