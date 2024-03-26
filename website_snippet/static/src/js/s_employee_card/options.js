/** @odoo-module **/
import options from "@web_editor/js/editor/snippets.options";
import { renderToElement } from "@web/core/utils/render";

options.registry.s_employee_card_options = options.Class.extend({
    async willStart() {
        const _super = this._super.bind(this);
        // await this.selectDataAttribute
        return _super(...arguments);
    },

    // async selectDataAttribute(previewMode, widgetValue, params) {
    //     try {
    //         var data = [];
    //         if (widgetValue && JSON.parse(widgetValue).length) {
    //             var itemSelect = JSON.parse(widgetValue);
    //             for (var iter = 0; iter < itemSelect.length; iter++) {
    //                 data.push(itemSelect[iter].id)
    //             }
    //         }
    //         var domain = data
    //         if(data.length){
    //             domain = [["department_id" , "in", data]]
    //         }
    //         this.employee = await this.orm.searchRead(
    //             "hr.employee",
    //             domain,
    //             ["id", "name", "department_id", "job_id"]
    //         )
    //         console.log(this.employee);
    //         debugger
    //         const employeeDetailEl = renderToElement("employee_card_data_iterate_options_template", {
    //                 employee: this.employee,
    //             }
    //         );
    //         document.querySelector("#table_snippet").replaceChildren(employeeDetailEl);
    //         } catch (error) {
    //         console.log(error);
    //     }
    // },
});
