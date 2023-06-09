export const forms = {
  form: 'h-screen flex flex-col font-cursive text-accentcolor3 text-custom w-2/3 mx-auto',
  labelDiv: 'flex flex-col',
  label: 'text-left text-custom mb-0',
  input:
    'bg-accentcolor3 p-1 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full font-sans mb-4',
  error: 'text-red-400 font-sans text-sm mb-4 m-5 bg-accentcolor3 px-4',
  div: 'flex flex-col text-accentcolor3 text-custom w-2/3 mb-4 mx-auto items-center font-san text-sm items-center justify-center text-center',
};

export const buttons = {
  standard:
    'flex items-center justify-center max-w-xs w-40 bg-dim-black font-cursive text-accentcolor2 tracking-widest text-3xl bg-accentcolor4 py-2 px-2 rounded-lg hover:scale-110 transition duration-300 border shadow-custom',
  whiteBackground:
    'flex items-center justify-center max-w-xs bg-dim-black font-cursive text-accentcolor2 tracking-widest text-xl bg-accentcolor4 py-2 px-2 rounded-lg hover:scale-110 transition duration-300 shadow-lg',
  disabled: 'opacity-50 cursor-not-allowed',
  small:
    'flex items-center justify-center max-w-xs bg-dim-black font-cursive text-accentcolor2 tracking-widest text-2xl bg-accentcolor4 py-1 px-4 rounded-lg hover:scale-110 transition duration-300 h-8 border shadow-custom',
  whiteBackgroundSmall:
    'flex items-center justify-center max-w-xs bg-dim-black font-cursive text-accentcolor2 tracking-widest text-2xl bg-accentcolor4 px-2 pt-1 rounded-lg hover:scale-110 transition duration-300 shadow-lg',
};

export const cards = {
  flexDiv: 'flex flex-col m-4 items-center gap-4',
  containerDiv:
    'w-11/12 mx-auto max-w-screen-sm text-accentcolor4 tracking-widest bg-accentcolor2 font-cursive py-6 px-6 rounded-lg shadow-custom',
  infoDiv: 'mx-auto max-w-md text-center text-accentcolor4',
  heading: 'font-cursive text-5xl tracking-widest',
  headingSmall: 'font-cursive text-4xl',
  headingXSmall: 'font-cursive text-3xl',
  headingWithinImage: 'absolute bottom-1 left-4 text-accentcolor4 ',
  flexRowDiv: 'flex flex-row gap-4  mx-auto',
  imageDiv: 'flex items-center justify-center',
  normalText: 'font-sans text-left text-sm mb-2',
  normalTextCenter: 'font-sans text-center text-sm mb-2',
  boldText: 'text-left text-sm mb-2',
  underlineLink: 'text-left font-cursive text-3xl underline',
  line: 'h-px mx-auto bg-accentcolor1 border-0 my-4',
};

export const signIn = {
  div: 'flex items-center justify-center font-sans text-cutom',
  supabase: {
    style: {
      button: {
        padding: 0,
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: '#540375',
        borderRadius: 15,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Jomhuria',
        fontSize: 40,
        textTransform: 'upperCase',
      },
      input: {
        padding: 5,
        borderColor: '#F5E8DA',
        backgroundColor: '#F5E8DA',
        borderRadius: 15,
        color: 'black',
        textAlign: 'centre',
        fontSize: 14,
        width: 300,
      },
      label: {
        display: 'none',
      },
      anchor: {
        color: '#F5E8DA',
      },
    },
  },
};
