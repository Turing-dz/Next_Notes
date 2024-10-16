teacher's github link:https://github.com/ByteGrad/Professional-React-and-Next.js-Course/blob/main/rmtdev/final-code/src/components/BookmarksPopover.tsx
01:npm create vite@4.4.1 .(React,javascript)
02:npm create vite@4.4.1 .
03:npm create vite@4.4.1 .
<header> <main> <footer>
04:npm create vite@4.4.1 .
    'react/prop-types':'off',
    npm install react-select@5.7.5
    npm install zustand@4.4.4
05:npm create vite@4.4.1 .(React,typescript)
    npm i @radix-ui/react-icons@1.3.0
    npm install zustand@4.4.4
06:高级进阶git clone https://github.com/ByteGrad/starter-rmtdev .  
npm install 
npm run dev
useDebounce,react query,react hot toast(npm i react-hot-toast@2.4.1)，ts-reset
(tag,header main footer form)
createPortal 是 React 提供的一个用于将子组件渲染到父组件 DOM 层次结构之外的功能。
07:next.js
npx create-next-app@latest .
npm run dev
08:npx create-next-app@14.0.1 .
npm install clsx(动态地组合多个 CSS 类名)
npm install framer-motion@10.16.4( React 动画库，支持多种动画效果，包括拖拽、弹簧动画和可定制的路径动画)
npm install tailwind-merge@2.0.0(自动去除重复类名，并且根据优先级合并样式)
npm install prisma@5.6.0 --save-dev
npx prisma init  --datasource-provider sqlite    (初始化sqlite数据库，会生成schema.prisma，定义数据库模式)
npx prisma db push (生成db文件)
npx prisma studio(查看db数据)
在package.json中配置seed脚本，填充初始数据
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
}
npm install ts-node@10.9.1 --save-dev(安装ts-node)
npx prisma db seed(运行seed脚本，插入数据)
npm install @radix-ui/react-icons@1.3.0
npm install zod@3.22.4(对象验证和类型推断)
 npm run dev
 npm run build(打包)
 npm install server-only(隔离代码，使其只在服务器端执行,使用《import "server-only"》)
导出部署：在next.config.js的nextConfig里添加output:"export",(导出静态文件，暂时不用这种前后分离的部署)
部署到vercel：（https://vercel.com） 
1.数据库sqlite
npx prisma db push(在设置完schema.prisma和.env里面关于vercel里面的库信息（prisma，.env.local）的设置，并且在.gitignore里面添加了.env之后，使用这个命令，给远程仓库创建表)
npx prisma db seed(给远程仓库的表添加seed里面的数据)
在package.json文件的scripts里面添加"postinstall":"prisma generate"(维护 Prisma Client 的最新状态)
2.代码push到github(使用next创建脚手架时就已经建立了仓库，所以直接使用)
git add .
git commit -m "initial"
git remote add origin https://github.com/Turing-dz/nextjs-note-evento-project.git（github新建仓库后的…or push an existing repository from the command line里给的命令）
git branch -M main
git push -u origin main
3.代码从github转发到vercel
新建project，找到自己的仓库然后import，deploy，（出现prism环境变量问题）
点击用户名返回主页，进入刚创建的项目，点击settings，添加环境变量，将项目隐藏的.env里的配置内容全部粘贴进去Environment Variables，然后点击save。然后去redeploy。visit即可。




 <header><footer><main><Link>(import Link from "next/link";)<section><Image>(import Image from "next/image";这里如果是本地图片设置src和alt，网络图片还要设置width和height)<nav><ul><li><small>&copy;
 使用跨域图片时，在next.config.js里面设置图片允许从某域名获取：
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:"https",
            hostname:"bytegrad.com"
        }]
    }
}
tailwindCSS:
flex所有内容水平到一行
flex flex-col所有内容垂直到一列
flex flex-col xl:flex-row mobile的时候列，pc的时候行排列
flex flex-wrap 所有内容包裹在页面里，自动换行
gap-10 包裹的内容相距10
max-w-[500px] 最大宽度是500px
flex-1 占剩余(水平或垂直)的全部部分（父必须也是flex）
basis-80 占剩余的但是有个最小大小
items-center 内容在竖直<flex>（或水平<flex-col>）方向处于中间位置
justify-between 内容在水平方向向两边均等布局
gap-x-6 水平方向，每个内容距离6(一行内的块级元素相距6)
space-x-2 水平方向，每个内容距离2(一个块级元素内的行内元素相距6)
border-b 下边框(bottom)
border-white/10 边框白色，透明的10%
rounded-lg 边框圆角lg（默认值0.5rem /* 8px */）
h-14 高14
w-full 宽度100%充满
h-[380px] 高380px
w-[500px] 宽500px
sm:w-[580px] middle页面时宽度是自定义的580px
px-3 水平两边的padding是3
px-[20px]  水平两边的padding是20px
py-24 垂直两边的padding是24
pt-36 top的padding是36
sm:px-9 middle页面时padding两边的9
mt-7 margin-top:7
mb-12 margin-bottom:12
opacity-75 透明度75%
bg-white/[7%] 背景白色透明度7%，差不多就是暗黑色（一般都是整除5的数字，别的数字就是这样的自定义格式）
focus:bg-white/10 聚焦此元素时背景白色，透明度10%
focus:ring-2 聚焦此元素时给一个ring边框2大小
ring-[#a4f839]/50 自定义ring边框的背景色和透明度（50%）
outline-none 去掉边框
max-w-7xl 布局的宽度是7xl
mx-auto 内容上下左右布局auto，container位于中间位置
min-h-screen 页面最小高度整个页面，所以footer内容会充满到整个页面底部
min-h-[110vh] 页面最小高度超过屏幕，所以会出现滚轮
overflow-y-scroll 无论内容是否超出元素的边界，都会显示滚动条(垂直方向)
ml-auto 元素的marginleft会充满，然后元素靠右边放



text-white/50 文字白色，透明度50%
text-[#a4f839] 文字颜色自定义#a4f83
hover:text-white 鼠标悬停时，文字白色，透明度100%
transition 从正常到hover过度的时候的渐变效果，默认是150ms毫秒
text-sm 文字的大小（size）是中等（small）
text-xs 文字的大小(extra small)
text-3xl 文字的大小3xl
lg:text-6xl large页面时文字大小6xl
font-bold 文字加粗
font-semibold文字加粗一点儿
italic 文字斜体
underline 文字下划线
tracking-tight缩小字母之间的间距-0.025em
leading-6 文字的行高
tailwind.config.ts里面自定义项目主题色：
theme: {
    extend: {
      colors:{accent: "#a4f839"}
    },
  },
使用的时候：text-accent,ring-accent/50  




09：（form:onSubmit,action）
revalidationPath：revalidatePath 和 revalidateTag 是 Next.js 中用于手动重新验证特定路径或标签缓存的函数。
experimental_useFormStatus：获取表单提交的状态信息(pending：一个布尔值，指示表单是否正在提交。data：表单提交的数据。method：表单提交的方法（如 GET 或 POST）。action：表单的提交目标 URL。)
experimental_useOptimistic：在等待服务器响应的同时，更新 UI，而不是等待服务器的响应。
react hook form:管理表单状态npm install react-hook-form({useForm}),客户端表单验证
zod：数据验证（客户端，服务端都可以验证）npm install zod @hookform/resolvers


10:petsoft-project()
npx create-next-app@14.1.0 .
npm run dev
shadcn组件的使用：npx shadcn-ui@0.8.0 init(New York,Zinc,no),生成components.json和lib/utils.ts文件。
使用button组件：npx shadcn-ui@0.8.0 add button (生成src/components/ui/button.tsx)(variant="secondary",asChild)
absolute  top-0  -z-10 背景图片的classname，（绝对定位，将元素紧贴其定位祖先的顶部，将元素放置在较低的层级，使它在其他元素之下）
max-w-[1050px] mx-auto 页眉导航条的class那么（最大宽度，水平方向居中）
mt-auto 页脚使元素占据剩余的垂直空间(其父必须是flex flex-col min-h-screen)
grid grid-cols-3 grid-rows-[45px_1fr]内容（网格布局，网格容器的列数设置为 3 列，设置网格容器的行高：第一行的高度设置为 45px，第二行的高度设置为 1fr，表示这行的高度会占据剩余的空间。）
row-start-1 row-span-1 col-start-1 col-span-1(网格项应该从第 1 行开始,网格项的高度将仅占据 1 行的空间,网格项应该从第 1 列开始,网格项的宽度将仅占据 1 列的空间)
row-span-full(网格项的高度占据剩余的空间) 
input的type有text和search，number
npx shadcn-ui@0.8.0 add dialog textarea(生成src/components/ui/dialog.tsx)(<Dialog><DialogTrigger><DialogContent><DialogHeader><DialogTitle><DialogFooter>)
npx shadcn-ui@0.8.0 add label input(form表单用到的)
prisma（OCR）的使用：npm i typescript@5 ts-node@10.9.1 @types/node@20 --save-dev
npm i prisma@5.8.1 --save-dev
npx prisma init  --datasource-provider sqlite(初始化prisma的配置，生成schema.prisma，这里设置了和sqlit库的链接)
在schema.prisma里面添加数据库表的信息model，然后npx prisma db push (生成db文件，根据里面的model生成对应的表)
npx prisma studio(查看db数据)
为了使得prisma client只实例化一次，所以在lib/db.ts里面添加配置(后续使用时导入即可：import prisma from "@/lib/db")：
import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
然后创建一些seed数据，在prisma里面新建seed.ts文件，里面写数据(使用client链接库，先数据，关掉链接)，然后在package.json里面配置编译seed文件的位置：
"prisma": {
  "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
},
最后运行npx prisma db seed，根据seed文件进行编译，并生成数据到数据库中.
npx shadcn-ui@0.8.0 add sonner(提示error的toast组件)
npm i react-hook-form@7.47.0(使用useForm管理和前端验证表单)
npm install zod@3.22.4  npm i @hookform/resolvers@3.3.2（前后端验证表单）
npm install bcrypt@5.1.1(hash加密)
npm i --save-dev @types/bcrypt
npm i next-auth@5.0.0-beta.4(jwt身份验证)
openssl rand -base64 32(随机生成32位随机字符串)