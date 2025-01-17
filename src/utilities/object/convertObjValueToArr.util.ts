type Toutput = string[];

interface IProps {
  object: {[key:string]: string};
}

export function convertObjStrValueToArr({object}:IProps):Toutput {
  const objKeyList = Object.keys(object);
  return objKeyList;
}