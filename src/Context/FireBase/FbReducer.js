import { SHOW_LOAD, ADD_NOTE, FETCH_NOTES, REMOVE_NOTE } from "../Types"

const handlers = {
  [SHOW_LOAD]: state => ({
    ...state,
    load: true
  }),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [
      ...state.notes,
      payload
    ]
  }),
  [FETCH_NOTES]: (state, {payload}) => ({
    ...state,
    notes: payload,
    load: false
  }),
  [REMOVE_NOTE]: (state, {payload}) => ({
    ...state,
    notes: state
      .notes
      .filter(note => (note.id !== payload))
  }),
  DEFAULT: state => state
}

export const FbReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}