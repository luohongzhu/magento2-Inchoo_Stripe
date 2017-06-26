/**
 * ccohs_PaymentMonerisHPP Magento JS component
 *
 * @category    ccohs
 * @package     ccohs_PaymentMonerisHPP
 * @author      Leo Zhu
 * @copyright   CCOHS (http://www.ccohs.net)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @credit      Ivan Weiler & Stjepan Udovičić
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'ccohs_moneris',
                component: 'ccohs_PaymentMonerisHPP/js/view/payment/method-renderer/moneris-method'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
