/**
 * ccohs_PaymentMonerisHPP Magento JS component
 *
 * @category    ccohs
 * @package     ccohs_PaymentMonerisHPP
 * @author      Leo Zhu
 * @copyright   CCOHS (http://www.ccohs.ca)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @credit      Ivan Weiler & Stjepan Udovičić
 */
/*browser:true*/
/*global define*/
define(
    [
        'Magento_Payment/js/view/payment/cc-form',
        'jquery',
        'Magento_Payment/js/model/credit-card-validation/validator'
    ],
    function (Component, $) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'ccohs_PaymentMonerisHPP/payment/moneris-form'
            },

            getCode: function() {
                return 'ccohs_paymentmonerishpp';
            },

            isActive: function() {
                return true;
            },

            validate: function() {
                var $form = $('#' + this.getCode() + '-form');
                return $form.validation() && $form.validation('isValid');
            }
        });
    }
);
