import { ImageModel } from './image.model';

export class ProductModel {
  constructor(public companyName:string = '',
              public productName:string = '',
              public productDescription:string = '',
              public productPrice:number = 0,
              public productDiscount:number = 0,
              public images?:ImageModel[]) {}
}
