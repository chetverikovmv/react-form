import { IAdvantage } from "../interfaces/IAdvantage"
import { UseActions } from "./useActions";
import { useTypedSelector } from "./useTypedSelector";

export const useAdvantages = () => {

    const { advantages } = useTypedSelector(state => state.createForm.formData);
    const { setAdvantages } = UseActions();

    function addAdvantage(advantage: IAdvantage) {
        setAdvantages([...advantages, advantage])
    }

    function changeAdvantageTitle(id: number, value: string) {
        const advantagesCopy = [...advantages];
        const current = advantagesCopy.find(adv => adv.id === id);
        if (current) {
            current.value = value
        }
        setAdvantages(advantagesCopy);
    }

    function deleteAdvantage(id: number) {
        setAdvantages([...advantages].filter(adv => adv.id !== id))
    }

    return { addAdvantage, changeAdvantageTitle, deleteAdvantage }
}