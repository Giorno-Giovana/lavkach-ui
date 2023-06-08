<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  layout: 'empty',
  title: 'Signup',
  preview: {
    title: 'Signup 2',
    description: 'For authentication and sign up',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-signup-2.png',
    srcDark: '/img/screens/auth-signup-2-dark.png',
    order: 101,
  },
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_LENGTH: 'Password must be at least 8 characters',
  PASSWORD_CONTAINS_EMAIL: 'Password cannot contain your email',
  PASSWORD_MATCH: 'Passwords do not match',
  TERMS_REQUIRED: 'You must agree to the terms and conditions',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
    password: z.string().min(8, VALIDATION_TEXT.PASSWORD_LENGTH),
    confirmPassword: z.string(),
    terms: z.boolean(),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (data.password.includes(data.email)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.PASSWORD_CONTAINS_EMAIL,
        path: ['password'],
      })
    }
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.PASSWORD_MATCH,
        path: ['confirmPassword'],
      })
    }
    if (!data.terms) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.TERMS_REQUIRED,
        path: ['terms'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  email: '',
  password: '',
  confirmPassword: '',
  terms: false,
}))

const { handleSubmit, isSubmitting } = useForm({
  validationSchema,
  initialValues,
})

const router = useRouter()
const toaster = useToaster()

const email = ref('')
const password = ref()

const onSubmit = async () => {
  $fetch('/users', {
    method: 'POST',
    body: {
      email: email.value,
      password1: password.value,
      password2: password.value,
      nickname: `user ${~~Math.random() * 10000}`,
    },
    onResponse(context) {
      if (context.response.ok) {
        useFetch('/users/login', {
          method: 'POST',
          body: {
            email: email.value,
            password: password.value,
          },
          onResponse(context) {
            const token = context.response._data.token
            useLocalStorage('token', '').value = token
            router.push('/')
          },
        })
      }
      // con
      // const token = context.response._data.token
      // useLocalStorage('token', '').value = token
    },
  })
}
</script>

<template>
  <div
    class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"
  >
    <div class="flex w-full items-center justify-center">
      <div class="relative mx-auto w-full max-w-2xl">
        <!--Form-->
        <div class="me-auto ms-auto mt-4 w-full">
          <form
            method="POST"
            action=""
            @submit.prevent="onSubmit"
            class="me-auto ms-auto mt-4 w-full max-w-md"
            novalidate
          >
            <div class="text-center">
              <img src="../../assets/img/courier.png" class="mx-auto" />

              <BaseHeading as="h2" size="3xl" weight="medium">
                Регистрация в Lavkach
              </BaseHeading>
            </div>
            <div class="px-8 py-4">
              <div class="mb-10 space-y-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="email"
                >
                  <BaseInput
                    v-model="email"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="email"
                    label="Email"
                    placeholder="a.volozh@ya.ru"
                    autocomplete="email"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="password"
                >
                  <BaseInput
                    v-model="password"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="password"
                    label="Пароль"
                    placeholder="••••••••••"
                    autocomplete="new-password"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>

                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="confirmPassword"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="password"
                    label="Подтвердите пароль"
                    placeholder="••••••••••"
                    :classes="{
                      input: 'h-12',
                    }"
                    @update:model-value="handleChange"
                    @blur="handleBlur"
                  />
                </Field>
              </div>

              <div class="mb-6">
                <BaseButton
                  :disabled="isSubmitting"
                  :loading="isSubmitting"
                  type="submit"
                  color="primary"
                  class="!h-12 w-full"
                >
                  Зарегистрироваться
                </BaseButton>
              </div>

              <p
                class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <NuxtLink
                  to="/auth/login"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Войти
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
