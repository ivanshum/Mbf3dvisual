import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const MailForm = ({ Styles }) => {
  const dfltStatus = { status: `notsubmitted`, msg: `` }
  return (<>
    <Formik
      initialStatus={dfltStatus}
      initialValues={{ phone: '', email: '', myname: '' }}
      validate={values => {
        const errors = {};
        if (!values.phone) {
          errors.phone = 'Поле обязательно для заполнения';
        } else if (!/^[\d]{10,15}$/i.test(values.phone.replace(/[^\d]/g, ''))) {
          errors.phone = 'Неизвестный формат номера, необходимо как минимум 10 цифр';
        }
        if (!values.email) {
          errors.email = 'Поле обязательно для заполнения';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Email адрес заполнен некорректно. Пожалуйста, проверьте правильность ввода';
        }
        if (!values.myname) {
          errors.myname = 'Поле обязательно для заполнения';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        setStatus(dfltStatus)
        let formData = new FormData()
        formData.append(`phone`, values.phone.replace(/[^\d]/g, ''))
        formData.append(`email`, values.email)
        formData.append(`myname`, values.myname)
        fetch("/form.php", {
          method: "POST",
          body: formData
        }).then((response) => {
          if (response.ok) {
            return response.json()
          }
          return Promise.reject({ status: `error`, msg: `Упс! Что-то пошло не так. Попробуйте обновить страницу и попробовать ещё раз. Или воспользуйтесь кнопкой выше и позвоните нам!` })
        })
          .then(response => {
            setSubmitting(false);
            setStatus(response);
          })
          .catch((obj) => {
            setSubmitting(false);
            setStatus(obj);
          });
      }}
    >
      {({ isSubmitting, status }) => ((status && status.status === `ok`) ?
        <div className={Styles.sendeddiv}>{status.msg}</div> : <>
          <Form className={Styles.form}>
            <div>
              <Field placeholder={`Имя`} className={Styles.myname} type={`text`} name={`myname`} />
              <ErrorMessage name={`myname`} className={Styles.fielderr} component={`div`} />
            </div>
            <div>
              <Field placeholder={`email`} className={Styles.email} type={`email`} name={`email`} />
              <ErrorMessage name={`email`} className={Styles.fielderr} component={`div`} />
            </div>
            <div>
              <Field placeholder={`Телефон`} className={Styles.phone} type={`phone`} name={`phone`} />
              <ErrorMessage name={`phone`}className={Styles.fielderr} component={`div`} />
            </div>
            <div>
              <button className={`${Styles.button} ${isSubmitting ? Styles.butloading : ``}`} type={`submit`}>
                Отправить
              </button>
            </div>
            <div className={Styles.ps}>
              Нажимая кнопку отправить вы соглашаетесь с <a href={`/privacy-policy`} target={`_blank`} className={Styles.policylink}>политикой конфиденциальности</a>.
            </div>
          </Form>
          {(status.status === `error`) ? <div className={Styles.errmsg}>{status.msg}</div> : <></>}
        </>)}
    </Formik>
  </>
  )
}

export default MailForm
