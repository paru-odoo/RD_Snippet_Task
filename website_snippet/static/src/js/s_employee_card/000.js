/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { renderToElement } from "@web/core/utils/render";

const Dynamic = publicWidget.Widget.extend({
  selector: ".s_employee_card",

  init: function () {
    this._super.apply(this, arguments);
    this.employee = null;
    this.orm = this.bindService("orm");
  },
  start: async function () {
    try {
        const res = (this.target.dataset.tempName && JSON.parse(this.target.dataset.tempName)) || [];
        let data = res.map(item => item.id);
        let domain = data
        if(data.length){
            domain = [["department_id" , "in", data]]
        }
        this.employee = await this.orm.searchRead(
            "hr.employee",
            domain,
            ["id", "name", "department_id", "job_id"]
        )
        const employeeDetailEl = renderToElement("employee_card_data_iterate_template", {
                employee: this.employee,
            }
        );
        document.querySelector("#table_snippet").replaceChildren(employeeDetailEl);
    } catch (error) {
        console.log(error);
    }
  },
});
publicWidget.registry.s_employee_card = Dynamic;
