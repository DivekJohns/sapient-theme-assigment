
export interface User {
    id: number,
    email: string,
    primaryTheme: string
}


export type UpdateUser = Partial<Omit<User, 'id' | 'email'>>;