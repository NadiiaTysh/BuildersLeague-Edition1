'use client'

import { useState } from 'react'

type OptType = {
  text: string
}
export const Resource = () => {
  const [search, setSearch] = useState('')
  const [selectedFileType, setSelectedFileType] = useState<Filetype>('image')
  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch((prev) => e.target.value)
  }

  return (
    <div className="flex flex-col items-center gap-10 p-10">
      {/* content  */}
      <Content
        selectedFileType={selectedFileType}
        searchText={search}
        handleSearchText={handleSearchText}
      />
      {/* questionnare */}
      <Questionnaire />

      <NoteDiv />
      <Actions />
    </div>
  )
}
const Questionnaire = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <QuesAnsElement
        ques={'Here is the question?'}
        opt={[{ text: 'sesedede' }, { text: 'sesedede' }, { text: 'sesedede' }]}
      />
      <QuesAnsElement
        ques={'Here is the question?'}
        opt={[{ text: 'sesedede' }, { text: 'sesedede' }, { text: 'sesedede' }]}
      />
      <QuesAnsElement
        ques={'Here is the question?'}
        opt={[{ text: 'sesedede' }, { text: 'sesedede' }, { text: 'sesedede' }]}
      />
      <QuesAnsElement
        ques={'Here is the question?'}
        opt={[{ text: 'sesedede' }, { text: 'sesedede' }, { text: 'sesedede' }]}
      />
    </div>
  )
}
const Content = ({
  selectedFileType,
  searchText,
  handleSearchText,
}: {
  selectedFileType: Filetype
  searchText: string
  handleSearchText: any
}) => {
  return (
    <>
      <Title title={'Residential school history'} />
      <Input
        placeholder="search"
        onChange={handleSearchText}
        value={searchText}
      ></Input>
      <Description
        text={
          "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
      />

      <File type={selectedFileType} />
    </>
  )
}
const Actions = () => {
  return (
    <div className="1 flex  w-full justify-between">
      <button
        type="button"
        className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Save to my notes
      </button>

      <div className="flex items-center">
        <input
          checked
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
        />
        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Checked state
        </label>
      </div>
      <button
        type="button"
        className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Post to public
      </button>
    </div>
  )
}
const NoteDiv = () => {
  return (
    <textarea
      id="message"
      rows={4}
      className="block w-full rounded-xl border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      placeholder="type in your notes here..."
    ></textarea>
  )
}
const QuesAnsElement = ({ ques, opt }: { ques: string; opt: OptType[] }) => {
  return (
    <div className="flex w-full flex-col  gap-2 rounded-xl border border-slate-200 p-10 ">
      <Question ques={ques} />
      {opt.map((o: OptType, i: number) => {
        return <Option option={o} key={i} index={i} />
      })}
    </div>
  )
}

const Question = ({ ques }: { ques: string }) => {
  return <div className="text-sm font-thin">{ques}</div>
}
const Option = ({ option, index }: { index: number; option: OptType }) => {
  return (
    <div className="flex gap-1 text-sm font-thin">
      <div>{index + 1}.</div>
      <div>{option.text}</div>
    </div>
  )
}

const Card = () => {
  return <div className="h-32 w-full rounded-md p-2 "></div>
}
function Title({ title }: { title: string }) {
  return (
    <div className="textjustify-center flex border-slate-400 text-3xl  font-thin">
      {title}
    </div>
  )
}

const Description = ({ text }: { text: string }) => {
  return (
    <p className="mb-3 w-full text-left text-gray-500  dark:text-gray-400">
      {text}
    </p>
  )
}
const Input = ({
  placeholder,
  onChange,
  value,
}: {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}) => {
  return (
    <div className="w-full max-w-[16rem]">
      <div className="relative">
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
          id="npm-install-copy-button"
          type="text"
          className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value={value}
        />
        <button
          data-copy-to-clipboard-target="npm-install-copy-button"
          data-tooltip-target="tooltip-copy-npm-install-copy-button"
          className="absolute end-2 top-1/2 inline-flex -translate-y-1/2 items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
        >
          <span id="default-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
          </span>
          <span id="success-icon" className="inline-flex hidden items-center">
            <svg
              className="h-3.5 w-3.5 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
          </span>
        </button>
        <div
          id="tooltip-copy-npm-install-copy-button"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        >
          <span id="default-tooltip-message">Copy to clipboard</span>
          <span id="success-tooltip-message" className="hidden">
            Copied!
          </span>
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  )
}
type Filetype = 'image' | 'video' | 'audio'
const File = ({ type }: { type: Filetype }) => {
  switch (type) {
    case 'image': {
      return (
        <figure className="max-w-lg">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://t3.ftcdn.net/jpg/07/02/44/70/240_F_702447075_0ZdExxmdIZrZezTiSn9YhIzu0ADh98h6.jpg"
            alt="image description"
          />
          <figcaption className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
            Image caption
          </figcaption>
        </figure>
      )

      break
    }
    case 'video': {
      return (
        <video className="h-full w-full rounded-lg" controls>
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )
      break
    }
    case 'audio': {
      return (
        <audio className="w-full" controls>
          <source src="https://www.example.com/audio.mp3" type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio>
      )
      break
    }
    default: {
      //statements;
      break
    }
  }
}
