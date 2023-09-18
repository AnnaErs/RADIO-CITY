export default (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ('00' + value.toString(16)).slice(-2);
  }
  return colour;
};

export const getColorByCallTypeId = (value?: string) => {
  switch (value?.toString()) {
    case 'c2edf311-4404-4e34-926e-79c0b3aeddab':
      return '#22c55e';
    case '53487ed8-9289-4368-9691-85e4ab92aac0':
      return '#f43f5e';
    case 'de7f26c1-b194-41e1-8ee3-fec14ee563b0':
      return '#f97316';
    case '6a013c16-48ad-42de-b51a-721737deca33':
      return '#fde047';
    case '7e1a6daa-65a9-4b52-8d1f-ed533f1cc565':
      return '#3b82f6';
    case '92b1bd3b-8a3c-4dfe-893c-fb1e8c7d6b90':
      return '#8b5cf6';
    default:
      return '#fff';
  }
};
