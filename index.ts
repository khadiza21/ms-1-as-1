function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === false) {
    return input.toLowerCase(); 
  }
  return input.toUpperCase();   
}
// 1 end

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}
// 2 end
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat(); 
}

// 3 end

class Vehicle {
 
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }


  public getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}


class Car extends Vehicle {
 
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year); 
    this.model = model;
  }

  public getModel(): string {
    return `Model: ${this.model}`;
  }
}

// 4 end
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
// 5 end


interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let highestPrice = products[0];

  for (const product of products) {
    if (product.price >highestPrice.price) {
     highestPrice = product;
    }
  }

  return highestPrice;
}

// 6 end
enum Day {
  Saturday,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Friday:
    case Day.Saturday:
    case Day.Sunday:
      return "Weekend";
    default:
      return "Weekday";
  }
}
//  7 end
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000); 
  });
}
   
