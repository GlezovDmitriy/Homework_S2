import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any+++
    switch (action.type) {
        case 'sort': { // by name
            let copyState = [...state]
            if(action.payload === 'up'){
                //console.log('up')
                copyState = copyState.sort((a: UserType ,b: UserType):number=> {
                    if (a.name < b.name) return -1;
                    else return 0;

                })
                //console.log(copyState)
            }
            if(action.payload === 'down'){
                //console.log('down')
                copyState = copyState.sort((a: UserType ,b: UserType):number=> {
                    if (a.name > b.name) return -1;
                    else return 0;
                })
                //console.log(copyState)
            }

            return copyState // need to fix+++

        }
        case 'check': {
let copyState = [...state]
            return copyState.filter(u => u.age >= action.payload) // need to fix+++
        }
        default:
            return state
    }
}
