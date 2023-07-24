import * as ProfileActionCreators from "./profileActionCreator"
import * as CreateFormActionCreator from "./createFormActionCreator"

export default {
    ...ProfileActionCreators,
    ...CreateFormActionCreator,
}