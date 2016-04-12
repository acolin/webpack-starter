class FormBuilder.Model.FieldSelectOption
  constructor: (args={}) ->
    @value = ko.observable(args.value)
    @_setValidations()

  @create: (args) ->
    if args instanceof Array
      new @(optionsArgs) for optionsArgs in args
    else
      new @(args)

  isValid: ->
    @value.notifySubscribers()
    @value.isValid()

  _setValidations: ->
    @value.extend({ required: message: 'Este campo es obligatorio' })