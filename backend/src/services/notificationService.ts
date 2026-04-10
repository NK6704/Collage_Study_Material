import { supabase } from '../config/supabase';
type NotificationType =
  | 'new_student_request'
  | 'request_approved_by_admin'
  | 'material_rated'
  | 'comment_reported_confirmation'
  | 'admin_action_in_dept'
  | 'moderator_added'
  | 'guideline_reminder'
  | 'system_alert'
  | 'moderator_request_decision'
  | 'upload_request_decision';

export const notificationService = {
  async create(
    userId: string,
    type: NotificationType,
    title: string,
    body: string,
    metadata?: Record<string, unknown>
  ) {
    const { data } = await supabase.from('notifications').insert({
      user_id: userId,
      type,
      title,
      body,
      metadata: metadata || null,
    }).select().single();


    return data;
  },
};
