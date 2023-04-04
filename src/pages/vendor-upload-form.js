import { useForm } from 'react-hook-form';
import Layout from 'components/Layout';
import ButtonLink from 'components/ButtonLink';
import airtableModule from 'utils/airtable';
import { useRouter } from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import * as styles from '@styles/index.js';

export default function App() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const errorMessage = ' * This field is required';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = session.user.email; //push session.user.email into data object
    airtableModule.createCollaborator(data);
    router.push('/manage-food');
  };

  return (
    <Layout pageTitle={'Details Form'} isBusinessPage auth>
      <div className={styles.forms.div}>
        <p>Please tell us some details about your company?</p>
      </div>
      <form className={styles.forms.form}>
        <div classname={styles.forms.labelDiv}>
          <label className={styles.forms.label}>COMPANY NAME</label>
          {errors.companyname && (
            <span className={styles.forms.error}>{errorMessage}</span>
          )}
        </div>
        <input {...register('companyname')} className={styles.forms.input} />
        <div classname={styles.forms.labelDiv}>
          <label className={styles.forms.label}>
            TELL US ABOUT YOUR COMPANY
          </label>
          {errors.description && (
            <span className={styles.forms.error}>{errorMessage}</span>
          )}
        </div>
        <textarea
          {...register('description', { required: true })}
          className={styles.forms.input}
        />
        <div classname={styles.forms.labelDiv}>
          <label className={styles.forms.label}>OPENING HOURS</label>
          {errors.companyhours && (
            <span className={styles.forms.error}>{errorMessage}</span>
          )}
        </div>
        <input
          {...register('companyhours', { required: true })}
          className={styles.forms.input}
        />
        <div classname={styles.forms.labelDiv}>
          <label className={styles.forms.label}>ADDRESS</label>
          {errors.address && (
            <span className={styles.forms.error}>{errorMessage}</span>
          )}
        </div>
        <textarea
          {...register('address', { required: true })}
          className={styles.forms.input}
        />
        <div classname={styles.forms.labelDiv}>
          <label className={styles.forms.label}>PHONE NUMBER</label>
          {errors.phonenumber && (
            <span className={styles.forms.error}>{errorMessage}</span>
          )}
        </div>
        <input
          {...register('phonenumber', { required: true })}
          className={styles.forms.input}
        />

        <div className={styles.forms.div}>
          <ButtonLink
            buttonName={'Submit'}
            ButtonOnClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </Layout>
  );
}
