<?php
/**
 * Payment CC Types Source Model
 *
 * @category    ccohs
 * @package     ccohs_PaymentMonerisHPP
 * @author      Leo Zhu
 * @copyright   CCOHS (http://www.ccohs.ca)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @credit      Ivan Weiler & Stjepan Udovičić
 */

namespace ccohs\PaymentMonerisHPP\Model\Source;

class Cctype extends \Magento\Payment\Model\Source\Cctype
{
    /**
     * @return array
     */
    public function getAllowedTypes()
    {
        return array('VI', 'MC', 'AE', 'DI', 'JCB', 'OT');
    }
}
