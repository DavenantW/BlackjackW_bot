const importFile = async (filePath) => (await import(filePath))?.default;

export default importFile;
