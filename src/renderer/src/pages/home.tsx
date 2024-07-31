import { Project } from '@renderer/@types/models/project'
import Logo from '@renderer/assets/logo.png'
import { Button } from '@renderer/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@renderer/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@renderer/components/ui/form'
import { Input } from '@renderer/components/ui/input'
import { Label } from '@renderer/components/ui/label'
import { Textarea } from '@renderer/components/ui/textarea'
import { useForm } from 'react-hook-form'

export function Home() {
  const form = useForm<Project>()

  async function handleCreateProject(data: Project) {
    const result = await window.api.projectsApi.create(data)
    console.log(result)
  }

  return (
    <div className="w-full h-[calc(100vh-3rem)] gap-y-12 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="" />
        <span className="text-white font-bold text-6xl">Taurius Builder</span>
        <span className="text-white font-bold text-sm">
          Crie executáveis de forma intuitiva e simples
        </span>
      </div>

      <Dialog>
        <DialogTrigger className="bg-design-system-blue-600 text-white text-base rounded-lg font-semibold px-6 h-12 hover:brightness-125 cursor-default">
          Criar Executável
        </DialogTrigger>
        <DialogPortal>
          <DialogOverlay className="opacity-65" />
          <DialogContent className="bg-design-system-schemes-on-surface-variant border-none outline-none">
            <DialogHeader className="font-bold text-design-system-schemes-inverse-on-surface text-xl">
              <DialogTitle>Criar Projeto</DialogTitle>
            </DialogHeader>
            <DialogDescription className="text-design-system-schemes-inverse-on-surface/50 text-xs">
              Crie um projeto para poder começar a gerar os executáveis de forma
              simples
            </DialogDescription>

            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(handleCreateProject)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-design-system-schemes-inverse-on-surface/70">
                        Nome do Projeto
                      </Label>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Insira o nome do projeto"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <Label className="text-design-system-schemes-inverse-on-surface/70">
                        Descrição do Projeto
                      </Label>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Escreva uma descrição para oo projeto..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="bg-red-700 hover:bg-red-600 transition-colors">
                      Cancelar
                    </Button>
                  </DialogClose>
                  <Button className="bg-green-700 hover:bg-green-600 transition-colors">
                    Criar Projeto
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  )
}
