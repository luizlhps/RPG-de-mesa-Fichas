import { useEffect, useState } from 'react';
import { OptionAttribute } from '../Components/StatsLayout/AtributteField/types/OptionAttribute';
import { Api } from '../services/axiosConfig';
import { IClasses } from '../services/types';

const useFetchNewSheet = () => {
  const [attributes, setAttributes] = useState<OptionAttribute[]>();
  const [originAttributes, setOriginAttributes] = useState<any>();
  const [classes, setclasses] = useState<IClasses[]>();

  const fetchNewSheet = () => {
    Api.get('/new').then((res) => {
      const arrayOfAttributes = res.data.attributes;
      const classesApi = res.data.classes;

      const attributesModify = arrayOfAttributes.map((item: number, index: number) => {
        return { id: index + 1, value: item, fieldCurrent: null };
      });

      //Atributtes
      setAttributes(attributesModify);
      setOriginAttributes(arrayOfAttributes);

      //classes
      setclasses(classesApi);
    });
  };

  useEffect(() => {
    fetchNewSheet();
  }, []);

  return {
    attributes,
    originAttributes,
    classes,
    setAttributes
  };
};

export default useFetchNewSheet;
