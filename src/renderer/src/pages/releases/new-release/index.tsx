import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@renderer/components/ui/form'
import { Input } from '@renderer/components/ui/input'
import { useForm } from 'react-hook-form'

import type { ReleaseCreateParams } from '@/shared/typing/models/releases'

export function NewRelease() {
  const form = useForm<ReleaseCreateParams>()

  return (
    <main>
      <Form {...form}>
        <form className="grid grid-cols-3 md:grid-cols-2 p-10 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormControl>
                <FormItem>
                  <FormLabel className="text-design-system-schemes-inverse-on-surface">
                    Nome da release *
                  </FormLabel>
                  <Input {...field} placeholder="Insira o nome da release..." />
                </FormItem>
              </FormControl>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormControl>
                <FormItem>
                  <FormLabel className="text-design-system-schemes-inverse-on-surface">
                    Nome da release *
                  </FormLabel>
                  <Input {...field} placeholder="Insira o nome da release..." />
                </FormItem>
              </FormControl>
            )}
          />
        </form>
      </Form>
    </main>
  )
}
