import { visit } from "../action/visit"
import { searchAndSelectItem } from "../action/searchAndSelectItem"
import { colorCheck } from "../action/colorCheck"
import { personalizeItem } from "../action/personalizeItem"
import { addCart } from "../action/addCart"
import { checkOut } from "../action/checkout"
import { login } from "../action/login"


describe('shopping Bracelet', ()=> {

    it('shopping', () => {
        visit();
        searchAndSelectItem('bracelet personalisable', 'Bijoux personnalisés prénom femme');
        colorCheck('Argent');
        personalizeItem('Cypress');
        addCart('1', '13,90');
        checkOut();
        login("credential.json");
    })

})