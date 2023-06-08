<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { FetchContext, FetchResponse } from 'ofetch'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

const router = useRouter()

definePageMeta({
  layout: 'empty',
  title: 'Login',
  preview: {
    title: 'Login 3',
    description: 'For authentication and sign in',
    categories: ['layouts', 'authentication'],
    src: '/img/screens/auth-login-3.png',
    srcDark: '/img/screens/auth-login-3-dark.png',
    order: 98,
  },
})

const VALIDATION_TEXT = {
  EMAIL_REQUIRED: 'A valid email is required',
  PASSWORD_REQUIRED: 'A password is required',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z.object({
  email: z.string().email(VALIDATION_TEXT.EMAIL_REQUIRED),
  password: z.string().min(1, VALIDATION_TEXT.PASSWORD_REQUIRED),
  trustDevice: z.boolean(),
})

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  email: '',
  password: '',
  trustDevice: false,
}))

const {
  handleSubmit,
  isSubmitting,
} = useForm({
  validationSchema,
  initialValues,
})

const onSubmit = handleSubmit(async (values) => {
  useFetch('/users/login', {
    method: 'POST',
    body: {
      email: values.email,
      password: values.password,
    },
    onResponse(
      context: FetchContext & { response: FetchResponse<{ token: string }> },
    ): Promise<void> | void {
      const token = context.response._data.token
      useLocalStorage('token', '').value = token
      router.push('/')
    },
  })
})
</script>

<template>
  <div
    class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"
  >
    <div
      class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"
    ></div>
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
            <img src="../../assets/img/bike.png" class="mx-auto" />

            <div class="text-center">
              <BaseHeading as="h2" size="3xl" weight="medium">
                Войти в Lavkach
              </BaseHeading>
            </div>
            <div class="px-8 py-4">
              <div class="mb-4 space-y-4">
                <Field
                  v-slot="{ field, errorMessage, handleChange, handleBlur }"
                  name="email"
                >
                  <BaseInput
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="email"
                    label="Email"
                    placeholder="a.volozh@ya.ru"
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
                    :model-value="field.value"
                    :error="errorMessage"
                    :disabled="isSubmitting"
                    type="password"
                    label="Пароль"
                    placeholder="lavkach one love"
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
                  Войти
                </BaseButton>
              </div>
              <p
                class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
              >
                <NuxtLink
                  to="/auth/signup"
                  class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
                >
                  Регистрация
                </NuxtLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
