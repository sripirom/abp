/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangePassword } from '@abp/ng.core';
import { ToasterService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { comparePasswords } from '@ngx-validate/core';
import { Store } from '@ngxs/store';
import snq from 'snq';
var minLength = Validators.minLength, required = Validators.required;
/** @type {?} */
var PASSWORD_FIELDS = ['newPassword', 'repeatNewPassword'];
var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb, store, toasterService) {
        this.fb = fb;
        this.store = store;
        this.toasterService = toasterService;
        this.mapErrorsFn = (/**
         * @param {?} errors
         * @param {?} groupErrors
         * @param {?} control
         * @return {?}
         */
        function (errors, groupErrors, control) {
            if (PASSWORD_FIELDS.indexOf(control.name) < 0)
                return errors;
            return errors.concat(groupErrors.filter((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var key = _a.key;
                return key === 'passwordMismatch';
            })));
        });
    }
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.form = this.fb.group({
            password: ['', required],
            newPassword: ['', required],
            repeatNewPassword: ['', required],
        }, {
            validators: [comparePasswords(PASSWORD_FIELDS)],
        });
    };
    /**
     * @return {?}
     */
    ChangePasswordComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.form.invalid)
            return;
        this.store
            .dispatch(new ChangePassword({
            currentPassword: this.form.get('password').value,
            newPassword: this.form.get('newPassword').value,
        }))
            .subscribe({
            next: (/**
             * @return {?}
             */
            function () {
                _this.form.reset();
                _this.toasterService.success('AbpAccount::PasswordChangedMessage', 'Success', { life: 5000 });
            }),
            error: (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                _this.toasterService.error(snq((/**
                 * @return {?}
                 */
                function () { return err.error.error.message; }), 'AbpAccount::DefaultErrorMessage'), 'Error', {
                    life: 7000,
                });
            }),
        });
    };
    ChangePasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'abp-change-password-form',
                    template: "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [mapErrorsFn]=\"mapErrorsFn\">\r\n  <div class=\"form-group\">\r\n    <label for=\"current-password\">{{ 'AbpIdentity::DisplayName:CurrentPassword' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"password\" id=\"current-password\" class=\"form-control\" formControlName=\"password\" autofocus />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-password\">{{ 'AbpIdentity::DisplayName:NewPassword' | abpLocalization }}</label\r\n    ><span> * </span><input type=\"password\" id=\"new-password\" class=\"form-control\" formControlName=\"newPassword\" />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"confirm-new-password\">{{ 'AbpIdentity::DisplayName:NewPasswordConfirm' | abpLocalization }}</label\r\n    ><span> * </span\r\n    ><input type=\"password\" id=\"confirm-new-password\" class=\"form-control\" formControlName=\"repeatNewPassword\" />\r\n  </div>\r\n  <abp-button iconClass=\"fa fa-check\" buttonClass=\"btn btn-primary color-white\" buttonType=\"submit\">{{\r\n    'AbpIdentity::Save' | abpLocalization\r\n  }}</abp-button>\r\n</form>\r\n"
                }] }
    ];
    /** @nocollapse */
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: Store },
        { type: ToasterService }
    ]; };
    return ChangePasswordComponent;
}());
export { ChangePasswordComponent };
if (false) {
    /** @type {?} */
    ChangePasswordComponent.prototype.form;
    /** @type {?} */
    ChangePasswordComponent.prototype.mapErrorsFn;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ChangePasswordComponent.prototype.toasterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcuYWNjb3VudC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFjLE1BQU0sb0JBQW9CLENBQUM7QUFDbEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNwQyxPQUFPLEdBQUcsTUFBTSxLQUFLLENBQUM7QUFFZCxJQUFBLGdDQUFTLEVBQUUsOEJBQVE7O0lBRXJCLGVBQWUsR0FBRyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQztBQUU1RDtJQWFFLGlDQUFvQixFQUFlLEVBQVUsS0FBWSxFQUFVLGNBQThCO1FBQTdFLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFPO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTmpHLGdCQUFXOzs7Ozs7UUFBMkIsVUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLE9BQU87WUFDakUsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE9BQU8sTUFBTSxDQUFDO1lBRTdELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsTUFBTTs7OztZQUFDLFVBQUMsRUFBTztvQkFBTCxZQUFHO2dCQUFPLE9BQUEsR0FBRyxLQUFLLGtCQUFrQjtZQUExQixDQUEwQixFQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDLEVBQUE7SUFFbUcsQ0FBQzs7OztJQUVyRywwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUN2QjtZQUNFLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7WUFDeEIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQztZQUMzQixpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7U0FDbEMsRUFDRDtZQUNFLFVBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2hELENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBUTs7O0lBQVI7UUFBQSxpQkFxQkM7UUFwQkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxPQUFPO1FBRTlCLElBQUksQ0FBQyxLQUFLO2FBQ1AsUUFBUSxDQUNQLElBQUksY0FBYyxDQUFDO1lBQ2pCLGVBQWUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO1lBQ2hELFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLO1NBQ2hELENBQUMsQ0FDSDthQUNBLFNBQVMsQ0FBQztZQUNULElBQUk7OztZQUFFO2dCQUNKLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxFQUFFLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQy9GLENBQUMsQ0FBQTtZQUNELEtBQUs7Ozs7WUFBRSxVQUFBLEdBQUc7Z0JBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRzs7O2dCQUFDLGNBQU0sT0FBQSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQXZCLENBQXVCLEdBQUUsaUNBQWlDLENBQUMsRUFBRSxPQUFPLEVBQUU7b0JBQ3hHLElBQUksRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQTtTQUNGLENBQUMsQ0FBQztJQUNQLENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsNHBDQUErQztpQkFDaEQ7Ozs7Z0JBWlEsV0FBVztnQkFFWCxLQUFLO2dCQUpMLGNBQWM7O0lBNkR2Qiw4QkFBQztDQUFBLEFBbERELElBa0RDO1NBOUNZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFnQjs7SUFFaEIsOENBSUM7Ozs7O0lBRVcscUNBQXVCOzs7OztJQUFFLHdDQUFvQjs7Ozs7SUFBRSxpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VQYXNzd29yZCB9IGZyb20gJ0BhYnAvbmcuY29yZSc7XHJcbmltcG9ydCB7IFRvYXN0ZXJTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBjb21wYXJlUGFzc3dvcmRzLCBWYWxpZGF0aW9uIH0gZnJvbSAnQG5neC12YWxpZGF0ZS9jb3JlJztcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmd4cy9zdG9yZSc7XHJcbmltcG9ydCBzbnEgZnJvbSAnc25xJztcclxuXHJcbmNvbnN0IHsgbWluTGVuZ3RoLCByZXF1aXJlZCB9ID0gVmFsaWRhdG9ycztcclxuXHJcbmNvbnN0IFBBU1NXT1JEX0ZJRUxEUyA9IFsnbmV3UGFzc3dvcmQnLCAncmVwZWF0TmV3UGFzc3dvcmQnXTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWJwLWNoYW5nZS1wYXNzd29yZC1mb3JtJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYW5nZVBhc3N3b3JkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBmb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gIG1hcEVycm9yc0ZuOiBWYWxpZGF0aW9uLk1hcEVycm9yc0ZuID0gKGVycm9ycywgZ3JvdXBFcnJvcnMsIGNvbnRyb2wpID0+IHtcclxuICAgIGlmIChQQVNTV09SRF9GSUVMRFMuaW5kZXhPZihjb250cm9sLm5hbWUpIDwgMCkgcmV0dXJuIGVycm9ycztcclxuXHJcbiAgICByZXR1cm4gZXJyb3JzLmNvbmNhdChncm91cEVycm9ycy5maWx0ZXIoKHsga2V5IH0pID0+IGtleSA9PT0gJ3Bhc3N3b3JkTWlzbWF0Y2gnKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlciwgcHJpdmF0ZSBzdG9yZTogU3RvcmUsIHByaXZhdGUgdG9hc3RlclNlcnZpY2U6IFRvYXN0ZXJTZXJ2aWNlKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoXHJcbiAgICAgIHtcclxuICAgICAgICBwYXNzd29yZDogWycnLCByZXF1aXJlZF0sXHJcbiAgICAgICAgbmV3UGFzc3dvcmQ6IFsnJywgcmVxdWlyZWRdLFxyXG4gICAgICAgIHJlcGVhdE5ld1Bhc3N3b3JkOiBbJycsIHJlcXVpcmVkXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHZhbGlkYXRvcnM6IFtjb21wYXJlUGFzc3dvcmRzKFBBU1NXT1JEX0ZJRUxEUyldLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG9uU3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5zdG9yZVxyXG4gICAgICAuZGlzcGF0Y2goXHJcbiAgICAgICAgbmV3IENoYW5nZVBhc3N3b3JkKHtcclxuICAgICAgICAgIGN1cnJlbnRQYXNzd29yZDogdGhpcy5mb3JtLmdldCgncGFzc3dvcmQnKS52YWx1ZSxcclxuICAgICAgICAgIG5ld1Bhc3N3b3JkOiB0aGlzLmZvcm0uZ2V0KCduZXdQYXNzd29yZCcpLnZhbHVlLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6ICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgdGhpcy50b2FzdGVyU2VydmljZS5zdWNjZXNzKCdBYnBBY2NvdW50OjpQYXNzd29yZENoYW5nZWRNZXNzYWdlJywgJ1N1Y2Nlc3MnLCB7IGxpZmU6IDUwMDAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZXJyID0+IHtcclxuICAgICAgICAgIHRoaXMudG9hc3RlclNlcnZpY2UuZXJyb3Ioc25xKCgpID0+IGVyci5lcnJvci5lcnJvci5tZXNzYWdlLCAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZScpLCAnRXJyb3InLCB7XHJcbiAgICAgICAgICAgIGxpZmU6IDcwMDAsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl19