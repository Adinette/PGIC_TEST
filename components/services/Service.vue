
<template>
    
        <div class="max-w-lg border-2  border-black ">
            <div class="flex justify-between p-6 bg-slate-600 text-white space-x-4">
                <span> {{content}}</span>
                <span class="text-xs font-medium dark:text-amber-500"> {{ price }} </span>
            </div>
            <div class="py-6 px-3 text-sm">
                <p class=""> {{ description }} 
                <ul>
                    <li class=""> {{ liste1 }} </li>
                    <li> {{ liste2 }} </li>
                    <li>{{ liste3 }}   </li>
                    <li> {{ liste4 }}  </li>
                    <li> {{ liste5 }}  </li>
                    <li> {{ liste6 }}  
                        <a class="text-black font-bold text-sm" href=""> {{ link1 }}</a>
                    </li>
                </ul>
                </p>
            </div>
            <div class="pb-6 px-6 mt-8 space-x-2 text-center">
                <a rel="noopener noreferrer" href="#"
                    class="px-6 py-2 text-base font-semibold rounded dark:bg-amber-400 dark:text-white">{{ link2 }}</a>
            </div>
        </div>

</template>

<script>
export default {
    props: {
        content: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        liste1: {
            type: String,
            required: true,
        },
        liste2: {
            type: String,
            required: true,
        },
        liste3: {
            type: String,
            required: true,
        },
        liste4: {
            type: String,
            required: true,
        },
        liste5: {
            type: String,
            required: true,
        },
        liste6: {
            type: String,
            required: true,
        },
        link1: {
            type: String,
            required: true,
        },
        link2: {
            type: String,
            required: true,
        },
    },
};
</script>