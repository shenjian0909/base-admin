// const req = require.context("../../assets/icons/svg", false, /\.svg$/);
const modules = import.meta.glob(["../../assets/svg/*.svg"], { eager: true });
console.log("modules: ", modules);

const icons = Object.keys(modules).map(key => {
  return modules[key].default;
});
console.log("icons: ", icons);
export default icons;
