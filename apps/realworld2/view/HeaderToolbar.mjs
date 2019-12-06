import HeaderToolbarController from './HeaderToolbarController.mjs';
import Toolbar                 from '../../../src/container/Toolbar.mjs';

/**
 * @class RealWorld2.view.HeaderToolbar
 * @extends Neo.container.Toolbar
 */
class HeaderToolbar extends Toolbar {
    static getConfig() {return {
        /**
         * @member {String} className='RealWorld2.view.HeaderToolbar'
         * @private
         */
        className: 'RealWorld2.view.HeaderToolbar',
        /**
         * @member {Neo.controller.Component} controller=HeaderToolbarController
         */
        controller: HeaderToolbarController,
        /**
         * @member {Number} height=56
         */
        height: 56,

        items: [{
            text   : 'conduit',
            handler: 'onHomeButtonClick'
        }, '->', {
            text   : 'Home',
            handler: 'onHomeButtonClick'
        }, {
            text   : 'New Article',
            handler: 'onNewArticleButtonClick'
        }, {
            text   : 'Settings',
            handler: 'onSettingsButtonClick'
        }, {
            text   : 'Profile',
            handler: 'onProfileButtonClick'
        }]
    }}
}

Neo.applyClassConfig(HeaderToolbar);

export {HeaderToolbar as default};