import { create } from 'zustand';

type roleState = {
    roleIdx: number,
    updateRole: (newRole: number) => void,
}


const myRole = create<roleState>((set) => ({
    roleIdx: 0,
    updateRole: (newIdx: number) => set({ roleIdx: newIdx }),
}))

export default myRole;