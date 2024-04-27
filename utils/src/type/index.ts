/**
 * 定义一个接口类型
 * 定义一个PersonInter对象类型,用于限制person对象的格式
 * 限制单个
 */
export interface PersonInter {
  id: string;
  name: string;
  age: number;
}

/**
 * 一个自定义类型，限制多个
 */

export type Persons = Array<PersonInter>;
