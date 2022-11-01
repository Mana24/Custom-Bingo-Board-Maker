import { useState } from "preact/hooks";

export const useInput = (initialValue) => {
   const [value, setValue] = useState(initialValue || '');
   const handleChange = (e) => setValue(e.target.value);

   return [value, setValue, handleChange];
}