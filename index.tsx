function Abc() {
  return (
    <>
      {/* Error on div 1: A DOM component cannot use both 'children' and 'dangerouslySetInnerHTML'. eslint @eslint-react/dom/no-dangerously-set-innerhtml-with-children */}
      <div dangerouslySetInnerHTML={{ __html: 'Hello World' }}>
        Goodbye World
      </div>

      {/* No error on div 2 */}
      <div dangerouslySetInnerHTML={{ __html: 'Hello World' }}>
        <p>Goodbye World</p>
      </div>
    </>
  );
}
