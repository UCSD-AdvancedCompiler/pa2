export type Program<A> = { a?: A, varinits : VarInit<A>[], fundefs : FunDef<A>[], stmts : Stmt<A>[]}

export type VarInit<A> = { a?: A, name : string, type: Type , init : Literal<A> }

export type FunDef<A> = { a?: A, name: string, params : TypedVar<A>[], ret : Type, inits : VarInit<A>[], body : Stmt<A>[] }

export type TypedVar<A> = { a?: A, name: string, type: Type }


export type Stmt<A> =
  | { a?: A, tag: "assign", name: string, value: Expr<A> }
  | { a?: A, tag: "return", expr: Expr<A> }
  | { a?: A, tag: "pass" }
  | { a?: A, tag: "expr", expr: Expr<A> }
  | { a?: A, tag: "ifelse", ifcond: Expr<A>, ifbody: Stmt<A>[],elif: Expr<A>, elifbody: Stmt<A>[], elsebody: Stmt<A>[] }
  | { a?: A, tag: "while", cond: Expr<A>, body: Stmt<A>[] }


export type Expr<A> =
    { a?: A, tag: "id", name: string }
  | { a?: A, tag: "builtin1", name: string, arg: Expr<A> }
  | { a?: A, tag: "builtin2", name: string, arg1: Expr<A>, arg2: Expr<A> }
  | { a? : A, tag: "unaryexp", op: UnaryOp, left: Expr<A> }
  | { a?: A, tag: "binaryexp", op: BinaryOp, left: Expr<A>, right: Expr<A> }
  | { a?: A, tag: "call", name:string, args: Expr<A>[] }
  | { a?: A, tag: "literal", literal: Literal<A> }

export type Literal<A> = 
    { a?: A, tag : "num", value: number}
  | { a?: A, tag : "bool", value: boolean }
  | { a?: A, tag : "none"}

export enum UnaryOp { Not = "not", Minus = "-" };

export enum BinaryOp { Plus = "+", Minus = "-", Mul = "*", Div = "//" , Mod = "%", Equal = "==" , NotEqual = "!=", LessEqual = "<=", GreaterEqual = ">=" , Less = "<", Greater = ">"}

export enum Type {int, bool, none}