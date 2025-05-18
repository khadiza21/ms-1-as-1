# Typescript

## Interview Questions

### 1. What are some differences between interfaces and types in TypeScript?
#### Answer: 
- In TypeScript , "interface" and "type" behaviour are almost same shown. but here has some small difference. 
- Mainly , Interface is made to understand object's shape. Interface can be extended. It can be re declare and mix like Declaration Merging. Interface is more efficient for Typescript compiler. And it helpful for large project. For object or class Interface is better in TypeScript.

- Example : Interface
interface Person {
  name: string;
  age: number;
}


- And Type is more flexible from interface. It's not only for object but also made for intersection, union , primitive. If Type declare by a name cannot be redeclare the same name again , if redeclare by same name then get error. If datatype is complex then union/intersection is Type is better. 
- Example: Type 
type ID = string | number;
type User = { name: string } & { age: number };




# 2. What is the use of the keyof keyword in TypeScript? Provide an example.
- 


# 3. Explain the difference between any, unknown, and never types in TypeScript.
- 

# 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
- 

# 5. What is type inference in TypeScript? Why is it helpful?
- 


# 6. How does TypeScript help in improving code quality and project maintainability?
- 


# 7. Provide an example of using union and intersection types in TypeScript.