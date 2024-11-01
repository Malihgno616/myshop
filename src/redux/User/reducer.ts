interface User {
  name: string;
  email: string;
}

export interface UserState {
  user: User | null;
}
const initialState: UserState = {
  user: null,
};

// Reducer: guarda os estados que desejamos compartilhar na aplicação
// Altera o estado por meio de uma função

interface UserAction {
  type: string;
  payload?: User;
}

// Todo reducer precisa retornar o nosso estado atualizado
export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  if (action.type === "user/login") {
    return {
      ...state,
      user: action.payload as User,
    };
  } else if (action.type === "user/logout") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
}