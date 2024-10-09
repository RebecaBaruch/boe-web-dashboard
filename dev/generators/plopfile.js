import componentGenerator from './component/generator.js';
import pageGenerator from './page/generator.js';

export default (plop) => {
    componentGenerator(plop);
    pageGenerator(plop);
};
