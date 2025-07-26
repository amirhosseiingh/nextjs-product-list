export interface productsType {
  id : number ,
  name : string , 
  price : number ,
  description : string
}


export const products : productsType[] = [
  {
    id: 1,
    name: "لپ‌تاپ",
    price: 1200,
    description: "یک لپ‌تاپ قدرتمند برای تمام نیازهای شما.",
  },
  {
    id: 2,
    name: "گوشی هوشمند",
    price: 800,
    description: "جدیدترین گوشی هوشمند با یک دوربین فوق‌العاده.",
  },
  {
    id: 3,
    name: "هدفون",
    price: 150,
    description: "هدفون با قابلیت حذف نویز برای صدایی فراگیر.",
  },
  {
    id: 4,
    name: "ساعت هوشمند",
    price: 250,
    description: "تناسب اندام خود را پیگیری کرده و متصل بمانید.",
  },
];
