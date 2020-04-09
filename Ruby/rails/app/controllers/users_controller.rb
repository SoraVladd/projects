class UsersController < ApplicationController
  before_action :require_login, except: [:new, :create]
  #Users
  def create
    @user = User.create(user_params)
    if @user.valid?
        flash[:notice] = ["You did it! The form was submitted!"]
        redirect_to '/groups'
    else
        redirect_to '/main', notice: @user.errors.full_messages
    end
  end
  def groups
    @user = User.find(session[:user_id])
    @groups = Group.all
    render "groups"
  end

  #Groups
  def create_group
    @group = Group.create(group_params)
    if @group.valid?
      new_group = Group.last.id
      @join = Join.create(user_id: current_user.id, group_id: new_group)
      redirect_to '/groups'
    else
      redirect_to '/groups',notice: @group.errors.full_messages
    end
  end

  def show
    @group = Group.find(params[:id])
    render "show"
end
  def delete_group
    @group = Group.find(params[:id])
    @group.destroy
  redirect_to '/groups'
end

#Joins
def join
  @join = Join.create(join_params)
redirect_to '/groups'
end
def leave
  @join = Join.where(user_id: session[:user_id], group_id: params[:id])
  @join.destroy_all
redirect_to '/groups'
end

  private 
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password)#.merge(user: User.find(session[:user_id]))
    end
    private 
    def group_params
        params.require(:group).permit(:name, :description).merge(user: User.find(session[:user_id]))
    end
    private 
    def join_params
        params.permit(:user_id, :group_id).merge(user: User.find(session[:user_id]),group: Group.find(params[:group_id]))
    end
end