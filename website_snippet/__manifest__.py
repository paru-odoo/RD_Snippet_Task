# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name':'Snippet_Task',
    'version':'1.0',
    'depends':['website','hr'],
    'data':[
        'views/snippets/s_employee_card.xml',
        'views/snippets/s_employee_options.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'website_snippet/static/src/js/s_employee_card/000.xml',
            'website_snippet/static/src/js/s_employee_card/000.js',
        ],
    },
    'author': "Odoo",
    'sequence':'1',
    'installable': True,
    'application': True,
    'auto_install': True,    
    'license': 'LGPL-3'
}
