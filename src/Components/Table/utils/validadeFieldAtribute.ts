import { ICharacterStats } from "../../StatsLayout/AtributteField/types/OptionAttribute";

const validadeFieldAttritube = (attributesField: ICharacterStats, originAttributes: number[]): boolean => {
    if (!attributesField) return true;

    const arrayOfValuesAttributes: number[] = Object.values(attributesField);
    let haveError = false;
    let amountOf0: number[] = [];

    arrayOfValuesAttributes.forEach((element) => {
      //adds a numeric element if it is zero
      if (element === 0) {
        amountOf0.push(element);
      }

      //verify if the Amountof0 the zeros of array is greater than 1
      if (amountOf0.length > 1) {
        haveError = true;
        return;
      }

      // verify if any null number
      if (element === null) {
        haveError = true;
        return;
      }

      //verify if are all field correct
      if (originAttributes) {
        const originAttributesSorted = JSON.stringify(originAttributes.sort());
        const arrayOfValuesAttributesSorted = JSON.stringify(originAttributes.sort());

        if (originAttributesSorted !== arrayOfValuesAttributesSorted) return (haveError = true);
      }
    });
    return haveError;
  };

  export default validadeFieldAttritube