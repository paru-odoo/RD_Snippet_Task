# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import http
from odoo.http import request

class WebsiteSnippet(http.Controller):
    @http.route(['/hr/employee'], type="json", auth="public")
    def website_snippet(self,department=None):
        if department:
            domain = [('department_id' , 'in', department)]
        else: 
            domain=[]
        res = request.env['hr.employee'].sudo().search_read(domain)
        return res
