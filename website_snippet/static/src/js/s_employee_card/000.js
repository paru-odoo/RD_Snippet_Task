/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { renderToElement } from "@web/core/utils/render";

const Dynamic = publicWidget.Widget.extend({
  selector: ".s_employee_card",

  init: function () {
    this._super.apply(this, arguments);
    this.employee = null;
    this.rpc = this.bindService("rpc");
  },

  start: async function () {

    try {
        var data = [];
        if (this.target.dataset.tempName && JSON.parse(this.target.dataset.tempName).length) {
            var itemSelect = JSON.parse(this.target.dataset.tempName);
            for (var iter = 0; iter < itemSelect.length; iter++) {
                data.push(itemSelect[iter].id)
            }
        }
        this.employee = await this.rpc("/hr/employee", {
            department: data,
        });
        const employeeDetailEl = renderToElement(
            "employee_card_data_iterate_template",
            {
            employee: this.employee,
            }
        );
        document
            .querySelector("#table_snippet")
            .replaceChildren(employeeDetailEl);
    } catch (error) {
        console.log(error);
    }
  },
});
publicWidget.registry.s_employee_card = Dynamic;
