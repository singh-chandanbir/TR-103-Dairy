import React from "react";

const Day1 = () => {
  return (
    <div class="markdown prose w-full break-words dark:prose-invert dark">
      <h1>What is Django?</h1>
      <p>
        Django is a high-level Python web framework that enables rapid
        development of secure and maintainable websites. It was designed to help
        developers take applications from concept to completion as quickly as
        possible. Django follows the model-template-views (MTV) architectural
        pattern and emphasizes reusability, less code, and rapid development. It
        comes with a variety of built-in features and functionalities that help
        developers build web applications efficiently.
      </p>
      <h1>Why Django?</h1>
      <h2>Advantages</h2>
      <ol>
        <li>
          <strong>Rapid Development</strong>: Django's principle of "don't
          repeat yourself" (DRY) allows for quick development cycles.
        </li>
        <li>
          <strong>Secure</strong>: Django helps developers avoid many common
          security mistakes by providing a secure framework for building web
          applications.
        </li>
        <li>
          <strong>Scalable</strong>: Django is designed to accommodate
          applications of any size, from simple projects to large-scale
          applications.
        </li>
        <li>
          <strong>Versatile</strong>: Django can be used for a variety of web
          applications, including content management systems (CMS), e-commerce
          sites, and more.
        </li>
        <li>
          <strong>Community Support</strong>: Django has a large and active
          community that contributes to its development and provides extensive
          documentation and tutorials.
        </li>
      </ol>
      <h2>Disadvantages</h2>
      <ol>
        <li>
          <strong>Monolithic</strong>: Django's "batteries-included" philosophy
          means it comes with a lot of built-in features, which can be overkill
          for small projects.
        </li>
        <li>
          <strong>Learning Curve</strong>: Due to its comprehensive nature,
          there can be a steep learning curve for beginners.
        </li>
        <li>
          <strong>Opinionated</strong>: Django has its own way of doing things,
          which might not align with the preferences of all developers.
        </li>
      </ol>
      <h2>Steps to Install Django</h2>
      <ol>
        <li>
          <p>
            <strong>Install Python</strong>: Ensure Python is installed on your
            system. You can download it from{" "}
            <a
              rel="noreferrer"
              target="_new"
              href="https://www.python.org/downloads/"
            >
              python.org
            </a>
            .
          </p>
        </li>
        <li>
          <p>
            <strong>Create a Virtual Environment</strong>: It's recommended to
            use a virtual environment to manage your project's dependencies.
          </p>
          <pre>
            <div class="dark:bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
              <div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                <span>bash</span>
                <div class="flex items-center">
                  <span class="" data-state="closed">
                    <button class="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="icon-sm"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Copy code
                    </button>
                  </span>
                </div>
              </div>
              <div class="overflow-y-auto p-4" dir="ltr">
                <code class="!whitespace-pre hljs language-bash">
                  python -m venv myenv
                </code>
              </div>
            </div>
          </pre>
          <p>Activate the virtual environment:</p>
          <ul>
            <li>
              <p>On Windows:</p>
              <pre>
                <div class="dark:bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
                  <div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                    <span>bash</span>
                    <div class="flex items-center">
                      <span class="" data-state="closed">
                        <button class="flex gap-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="icon-sm"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Copy code
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="overflow-y-auto p-4" dir="ltr">
                    <code class="!whitespace-pre hljs language-bash">
                      myenv\Scripts\activate
                    </code>
                  </div>
                </div>
              </pre>
            </li>
            <li>
              <p>On MacOS/Linux:</p>
              <pre>
                <div class="dark:bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
                  <div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                    <span>bash</span>
                    <div class="flex items-center">
                      <span class="" data-state="closed">
                        <button class="flex gap-1 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="icon-sm"
                          >
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          Copy code
                        </button>
                      </span>
                    </div>
                  </div>
                  <div class="overflow-y-auto p-4" dir="ltr">
                    <code class="!whitespace-pre hljs language-bash">
                      <span class="hljs-built_in">source</span>{" "}
                      myenv/bin/activate
                    </code>
                  </div>
                </div>
              </pre>
            </li>
          </ul>
        </li>
        <li>
          <p>
            <strong>Install Django</strong>: With the virtual environment
            activated, install Django using pip.
          </p>
          <pre>
            <div class="dark:bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
              <div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                <span>bash</span>
                <div class="flex items-center">
                  <span class="" data-state="closed">
                    <button class="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="icon-sm"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Copy code
                    </button>
                  </span>
                </div>
              </div>
              <div class="overflow-y-auto p-4" dir="ltr">
                <code class="!whitespace-pre hljs language-bash">
                  pip install django
                </code>
              </div>
            </div>
          </pre>
        </li>
        <li>
          <p>
            <strong>Create a Django Project</strong>: Use Django's command-line
            tool to create a new project.
          </p>
          <pre>
            <div class="dark:bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
              <div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                <span>bash</span>
                <div class="flex items-center">
                  <span class="" data-state="closed">
                    <button class="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="icon-sm"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Copy code
                    </button>
                  </span>
                </div>
              </div>
              <div class="overflow-y-auto p-4" dir="ltr">
                <code class="!whitespace-pre hljs language-bash">
                  django-admin startproject myproject
                </code>
              </div>
            </div>
          </pre>
        </li>
        <li>
          <p>
            <strong>Run the Development Server</strong>: Navigate to your
            project directory and run the development server.
          </p>
          <pre>
            <div class="dark:bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
              <div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                <span>bash</span>
                <div class="flex items-center">
                  <span class="" data-state="closed">
                    <button class="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="icon-sm"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Copy code
                    </button>
                  </span>
                </div>
              </div>
              <div class="overflow-y-auto p-4" dir="ltr">
                <code class="!whitespace-pre hljs language-bash">
                  <span class="hljs-built_in">cd</span> myproject python
                  manage.py runserver
                </code>
              </div>
            </div>
          </pre>
          <p>
            You can now visit <code>http://127.0.0.1:8000/</code> in your
            browser to see the default Django welcome page.
          </p>
        </li>
        <li>
          <p>
            <strong>Create a Django App</strong>: To add functionality to your
            project, create an app.
          </p>
          <pre>
            <div class="dark:bg-gray-950 rounded-md border-[0.5px] border-token-border-medium">
              <div class="flex items-center relative text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md">
                <span>bash</span>
                <div class="flex items-center">
                  <span class="" data-state="closed">
                    <button class="flex gap-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="icon-sm"
                      >
                        <path
                          fill="currentColor"
                          fill-rule="evenodd"
                          d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Copy code
                    </button>
                  </span>
                </div>
              </div>
              <div class="overflow-y-auto p-4" dir="ltr">
                <code class="!whitespace-pre hljs language-bash">
                  python manage.py startapp myapp
                </code>
              </div>
            </div>
          </pre>
        </li>
      </ol>
      <p>
        By following these steps, you can get started with Django and begin
        developing robust and scalable web applications.
      </p>
    </div>
  );
};

export default Day1;
